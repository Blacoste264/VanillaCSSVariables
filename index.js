const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    console.log(this.value);
}
inputs.forEach(inputs => addEventListener('change', handleUpdate));
inputs.forEach(input => addEventListener('mousemove', handleUpdate));

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


