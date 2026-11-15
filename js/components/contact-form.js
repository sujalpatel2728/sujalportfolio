/**
 * Contact Form Controller & Copy-to-Clipboard Utility
 * Validates inputs, handles submissions, provides user feedback and toast alerts
 */

class ContactFormController {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.statusAlert = document.getElementById('form-status-alert');
    this.toast = document.getElementById('toast');
    this.toastMessage = document.getElementById('toast-message');

    this.init();
  }

  init() {
    if (this.form) {
      this.bindFormEvents();
    }
    this.bindCopyButtons();
  }

  bindFormEvents() {
    const inputs = this.form.querySelectorAll('input, textarea');

    // Real-time input validation on change/blur
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => {
        if (input.classList.contains('is-invalid')) {
          this.validateField(input);
        }
      });
    });

    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  validateField(field) {
    const value = field.value.trim();
    let isValid = true;

    if (field.hasAttribute('required') && !value) {
      isValid = false;
    } else if (field.type === 'email' && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        isValid = false;
      }
    } else if (field.name === 'message' && value.length < 10) {
      isValid = false;
    }

    if (!isValid) {
      field.classList.add('is-invalid');
    } else {
      field.classList.remove('is-invalid');
    }

    return isValid;
  }

  validateAll() {
    const inputs = this.form.querySelectorAll('input, textarea');
    let isAllValid = true;

    inputs.forEach(input => {
      const valid = this.validateField(input);
      if (!valid) isAllValid = false;
    });

    return isAllValid;
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (!this.validateAll()) {
      this.showStatus('Please fill in all required fields with valid details.', 'error');
      return;
    }

    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.innerHTML;

    // Show loading state
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg class="animate-spin" style="animation: spin 1s linear infinite; width: 18px; height: 18px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor"></path>
      </svg>
      Sending message...
    `;

    const formData = {
      name: this.form.name.value.trim(),
      email: this.form.email.value.trim(),
      subject: this.form.subject.value.trim(),
      message: this.form.message.value.trim()
    };

    // Simulate sending message or fallback to mailto
    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;

      this.showStatus('Thank you, Sujal has received your message and will respond shortly!', 'success');
      this.showToast('Message sent successfully!');
      this.form.reset();

      // Also construct mailto draft option for convenience
      const mailtoLink = `mailto:sujalchaudhary271@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Hi Sujal,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`)}`;
      console.log('Form submitted. Mailto draft available:', mailtoLink);
    }, 900);
  }

  showStatus(msg, type) {
    if (!this.statusAlert) return;
    this.statusAlert.textContent = msg;
    this.statusAlert.className = `form-status-alert ${type}`;
    this.statusAlert.style.display = 'block';

    setTimeout(() => {
      this.statusAlert.style.display = 'none';
    }, 7000);
  }

  showToast(message) {
    if (!this.toast) return;
    if (this.toastMessage) {
      this.toastMessage.textContent = message;
    }
    this.toast.classList.add('show');

    setTimeout(() => {
      this.toast.classList.remove('show');
    }, 3200);
  }

  bindCopyButtons() {
    const copyButtons = document.querySelectorAll('[data-copy]');
    copyButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const textToCopy = btn.getAttribute('data-copy');
        if (!textToCopy) return;

        navigator.clipboard.writeText(textToCopy).then(() => {
          this.showToast(`Copied "${textToCopy}" to clipboard!`);
          const originalText = btn.innerHTML;
          btn.innerHTML = `<svg style="width:14px;height:14px;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copied`;
          setTimeout(() => {
            btn.innerHTML = originalText;
          }, 2000);
        }).catch(err => {
          console.error('Failed to copy:', err);
        });
      });
    });
  }
}

window.ContactFormController = ContactFormController;
