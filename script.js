
    // popup view 
    const popups = [
      {
        openButton: 'openPopup1',
        closeButton: 'closePopup1',
        content: 'content1'
      },
      {
        openButton: 'openPopup2',
        closeButton: 'closePopup2',
        content: 'content2'
      },
      {
        openButton: 'openPopup3',
        closeButton: 'closePopup3',
        content: 'content3'
      },
      {
        openButton: 'openPopup4',
        closeButton: 'closePopup4',
        content: 'content4'
      }
    ];
    
    popups.forEach(popupObj => {
      const openPopupButton = document.getElementById(popupObj.openButton);
      const closePopupButton = document.getElementById(popupObj.closeButton);
      const content = document.getElementById(popupObj.content);

      openPopupButton.addEventListener('click', () => {
        content.style.display = 'block';
      });
      closePopupButton.addEventListener('click', () => {
        content.style.display = 'none';
      });
    });