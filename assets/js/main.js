'use strict';

const TOKEN_ADDRESS = '3tHuuQm2qN3v6NAvf9tJuEagGdu2Mofpq935udPkQr9E';
const DONATE_ADDRESS = 'HL7xyeaccyBVFoGbbkqfC74HuEFNP8aZseDxVhSxwZJy';
const mobileLayout = window.matchMedia('(max-width: 1050px)');
let currentDialog = null;
let dialogOpener = null;
let inertBackground = [];

function setDropdown(open) {
  const nav = document.querySelector('.nav-more');
  if (!nav) return;
  nav.classList.toggle('open', open);
  nav.querySelector('button').setAttribute('aria-expanded', String(open));
}
function toggleDropdown(event) {
  event.preventDefault();
  setDropdown(!event.currentTarget.closest('.nav-more').classList.contains('open'));
}
function setMenu(open, restoreFocus = false) {
  const menu = document.getElementById('mobileMenu');
  const button = document.getElementById('menuToggle');
  if (!menu || !button) return;
  open = Boolean(open && mobileLayout.matches);
  menu.classList.toggle('active', open);
  menu.inert = !open;
  menu.setAttribute('aria-hidden', String(!open));
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  button.textContent = open ? '×' : '☰';
  if (restoreFocus) button.focus();
}
function toggleMenu() {
  setMenu(!document.getElementById('mobileMenu')?.classList.contains('active'));
}
function closeMenu() { setMenu(false); }

function toggleFaq(button) {
  const item = button.closest('.faq-item');
  const open = !item.classList.contains('active');
  item.classList.toggle('active', open);
  button.setAttribute('aria-expanded', String(open));
  item.querySelector('.faq-answer').hidden = !open;
}

function visibleControls(container) {
  return [...container.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')]
    .filter(el => !el.disabled && !el.closest('[inert]') && el.getClientRects().length);
}
function showDialog(id) {
  const dialog = document.getElementById(id);
  if (!dialog) return;
  if (currentDialog) hideDialog(false);
  dialogOpener = document.activeElement;
  setDropdown(false);
  closeMenu();
  currentDialog = dialog;
  dialog.hidden = false;
  dialog.classList.add('is-open');
  document.body.classList.add('dialog-open');
  // Make siblings at each ancestor level inert, including the footer behind its dialog.
  let branch = dialog;
  while (branch.parentElement) {
    for (const sibling of branch.parentElement.children) {
      if (sibling !== branch && !['SCRIPT', 'STYLE', 'LINK'].includes(sibling.tagName)) {
        inertBackground.push([sibling, sibling.inert]);
        sibling.inert = true;
      }
    }
    if (branch.parentElement === document.body) break;
    branch = branch.parentElement;
  }
  (visibleControls(dialog)[0] || dialog).focus();
}
function hideDialog(restoreFocus = true) {
  if (!currentDialog) return;
  currentDialog.classList.remove('is-open');
  currentDialog.hidden = true;
  currentDialog = null;
  inertBackground.forEach(([el, wasInert]) => { el.inert = wasInert; });
  inertBackground = [];
  document.body.classList.remove('dialog-open');
  if (restoreFocus && dialogOpener?.isConnected) dialogOpener.focus();
}
function openModal() { showDialog('impressum-modal'); }
function closeModal() { hideDialog(); }
function openPrivacy() { showDialog('privacy-modal'); }
function closePrivacy() { hideDialog(); }
function openQrModal() { showDialog('qr-modal'); }
function closeQrModal() { hideDialog(); }

async function copyText(address, button) {
  if (!button || button.disabled) return;
  const oldText = button.textContent;
  button.disabled = true;
  let status = button.parentElement.querySelector('.copy-status');
  if (!status) {
    status = document.createElement('p');
    status.className = 'copy-status';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-live', 'polite');
    button.insertAdjacentElement('afterend', status);
  }
  status.textContent = '';
  try {
    if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
    await navigator.clipboard.writeText(address);
    button.textContent = 'Adresse kopiert ✓';
    status.textContent = 'Die Adresse wurde in die Zwischenablage kopiert.';
  } catch {
    status.textContent = 'Kopieren nicht möglich. Bitte die angezeigte Adresse markieren und manuell kopieren: ' + address;
  } finally {
    button.disabled = false;
    window.setTimeout(() => { button.textContent = oldText; }, 2500);
  }
}
function copyTokenAddress(button) { return copyText(TOKEN_ADDRESS, button); }
function copyAddress() { return copyTokenAddress(document.querySelector('.copy-btn')); }
function copyDonateAddress(button) { return copyText(DONATE_ADDRESS, button); }

document.addEventListener('click', event => {
  if (!event.target.closest('.nav-more')) setDropdown(false);
  if (!event.target.closest('#mobileMenu, #menuToggle')) closeMenu();
  if (currentDialog && event.target === currentDialog) hideDialog();
});
document.addEventListener('focusin', event => {
  if (!event.target.closest('.nav-more')) setDropdown(false);
  if (document.getElementById('mobileMenu')?.classList.contains('active') &&
      !event.target.closest('#mobileMenu, #menuToggle')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (currentDialog) hideDialog();
    else if (document.getElementById('mobileMenu')?.classList.contains('active')) setMenu(false, true);
    else if (document.querySelector('.nav-more.open')) {
      setDropdown(false);
      document.querySelector('.nav-more-button').focus();
    }
  }
  if (event.key === 'Tab' && currentDialog) {
    const controls = visibleControls(currentDialog);
    const first = controls[0], last = controls[controls.length - 1];
    if (!first) { event.preventDefault(); currentDialog.focus(); }
    else if (event.shiftKey && (document.activeElement === first || document.activeElement === currentDialog)) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault(); first.focus();
    }
  }
});
document.addEventListener('DOMContentLoaded', () => {
  closeMenu();
  const header = document.querySelector('#site-header > header');
  if (header) {
    const updateHeight = () => document.documentElement.style.setProperty('--header-height', header.getBoundingClientRect().height + 'px');
    updateHeight();
    if (window.ResizeObserver) new ResizeObserver(updateHeight).observe(header);
  }
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-header a[href]').forEach(link => {
    if (link.getAttribute('href') === page) link.setAttribute('aria-current', 'page');
  });
  document.querySelectorAll('.faq-item').forEach((item, index) => {
    const button = item.querySelector('.faq-question'), answer = item.querySelector('.faq-answer');
    if (!button || !answer) return;
    answer.id ||= 'faq-answer-' + index;
    button.setAttribute('aria-controls', answer.id);
    button.setAttribute('aria-expanded', 'false');
    answer.hidden = true;
  });
});
mobileLayout.addEventListener('change', () => { closeMenu(); setDropdown(false); });
