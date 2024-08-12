// Get HTML elements
const switchingTabs = document.querySelectorAll('.js-switchingTab');
const switchingContents = document.querySelectorAll('.js-switchingContents');

// Add click event to tab buttons
switchingTabs.forEach(tabButton => {
  tabButton.addEventListener('click', () => {
    // Get the value of the data-switch-tab attribute of the clicked tab button
    const targetTab = tabButton.getAttribute('data-switch-tab');
    
    // Find the corresponding content element
    const targetContent = document.querySelector(`[data-switch-contents="${targetTab}"]`);
    
    // Remove .is-open class from all content elements
    switchingContents.forEach(switchingContent => {
      switchingContent.classList.remove('is-open');
    });
    
    // Add .is-open class to the corresponding content element
    if (targetContent) {
      targetContent.classList.add('is-open');
    }

    // Remove .is-current class from all tab buttons
    switchingTabs.forEach(tabButton => {
      tabButton.classList.remove('is-current');
    });

    // Add .is-current class to the clicked tab button
    tabButton.classList.add('is-current');

    // Add .is-current class to other tab buttons with the same data-switch-tab value
    switchingTabs.forEach(otherTabButton => {
      if (otherTabButton !== tabButton && otherTabButton.getAttribute('data-switch-tab') === targetTab) {
        otherTabButton.classList.add('is-current');
      }
    });
  });
});
