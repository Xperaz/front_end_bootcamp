const tab_items = document.querySelectorAll('.tab-item');
const tab_content_items = document.querySelectorAll('.tab-content-item');

// Select tab content item

function select_item(e) {
    // remove border from old tab
    remove_border();
    remove_show();
    // add border to current tab
    this.classList.add('tab-border');
    // Grab content item from dom
    const tab_content_item = document.querySelector(`#${this.id}-content`);
    // Add show class
    tab_content_item.classList.add('show');
}

function remove_border() {
    tab_items.forEach(item => item.classList.remove('tab-border'));
}

function remove_show() {
    tab_content_items.forEach(item => item.classList.remove('show'));
}

// Listen for tab click
tab_items.forEach(item => item.addEventListener('click', select_item));