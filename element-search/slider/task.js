const sliderPrev = document.querySelector( '.slider__arrow_prev' );
const sliderNext = document.querySelector( '.slider__arrow_next' );

const sliderItem = document.querySelectorAll( '.slider__item' );
const sliderDot = document.querySelectorAll( '.slider__dot' );


sliderNext.onclick = () => {
  for( let i = 0; i < sliderItem.length; i++ ) {
    if( sliderItem[ i ].classList.contains( 'slider__item_active' ) && sliderDot[ i ].classList.contains( 'slider__dot_active' )) {
      sliderItem[ i ].classList.remove( 'slider__item_active' );
      sliderDot[ i ].classList.remove( 'slider__dot_active' );
      if( i == 4 ) {
        i = - 1;
      }
      i++;
      sliderItem[ i ].classList.add( 'slider__item_active' );
      sliderDot[ i ].classList.add( 'slider__dot_active' );
    }
  }
}

sliderPrev.onclick = () => {
  for( let i = 0; i < sliderItem.length; i++ ) {
    if( sliderItem[ i ].classList.contains( 'slider__item_active' ) && sliderDot[ i ].classList.contains( 'slider__dot_active' )) {
      sliderItem[ i ].classList.remove( 'slider__item_active' );
      sliderDot[ i ].classList.remove( 'slider__dot_active' );
      if( i == 0 ) {
        i = 5;
      }
      i--;
      sliderItem[ i ].classList.add( 'slider__item_active' );
      sliderDot[ i ].classList.add( 'slider__dot_active' );
    }
  }
}


  for( let i = 0; i < sliderDot.length; i++ ) {
    if( sliderDot[i].classList.contains( 'slider__dot_active' ) ) a = i;
      sliderDot[ i ].onclick = () => {

        sliderDot[ a ].classList.remove( 'slider__dot_active' );
        sliderItem[ a ].classList.remove( 'slider__item_active' );
        a = i;
        sliderDot[ i ].classList.add( 'slider__dot_active' );
        sliderItem[ i ].classList.add( 'slider__item_active' );
    }
  }