(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.nav-links');
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    menuButton.setAttribute('aria-label', expanded ? 'Abrir menú' : 'Cerrar menú');
    navigation.classList.toggle('open', !expanded);
    document.body.classList.toggle('menu-open', !expanded);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    document.body.classList.remove('menu-open');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && navigation.classList.contains('open')) {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
      document.body.classList.remove('menu-open');
      menuButton.focus();
    }
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('form-status');
  const subjectField = document.getElementById('subject');
  const memberFields = [document.getElementById('role'), document.getElementById('organization')];
  function updateMembershipFields() {
    const joining = subjectField.value === 'Quiero asociarme';
    memberFields.forEach(field => { field.required = joining; });
    document.querySelectorAll('.membership-required').forEach(mark => { mark.hidden = !joining; });
  }
  subjectField.addEventListener('change', updateMembershipFields);
  if (new URLSearchParams(window.location.search).get('motivo') === 'asociarme') {
    subjectField.value = 'Quiero asociarme';
    updateMembershipFields();
  }
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const subject = `[CISO Connect] ${data.get('subject')}`;
    const body = [
      `Nombre: ${data.get('name')}`, `Correo: ${data.get('email')}`,
      `Cargo: ${data.get('role')}`, `Organización: ${data.get('organization')}`,
      `Motivo: ${data.get('subject')}`, '', String(data.get('message'))
    ].join('\n');
    status.textContent = 'Tu mensaje está preparado. Revísalo y envíalo desde tu aplicación de correo.';
    window.location.href = `mailto:contact@cisoconnect.io?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
})();
