export const theme = {
    breakpoints: ['40em', '52em', '64em'],
    // từ breakpont này sẽ có 4 điểm 
    // 0 > 40em : default
    // 40 > 52
    // 52 > 64
    // 64>>>
    colors: {
        mainColor: '#FFFFFF',
        bgColor: '#F2F2F2',
        bgHoverColor: '#F2F2F2',
        activeColor: '#2F80ED',
        textGrey: '#828282',
        textBlack: '#333333'
    },
    // có thể dùng vói styled system
    space: [0, 4, 8, 16, 32, 64, 128, 256, 512], 
    // spaces is magin , padding  nếu sử dụng nunmber thì px còn string có thể định dạng lại rem or em 
    // example margin={4}  ===> margin: 32px
    // nếu số lớn hơn length thì dùng số đó làm px
    // example margin={30} =>>> margin: 30px

    // responseive
    // <TitleTest m={[1,2,3,4]}>Test </TitleTest>


    fontSize: {
        small: '1rem',
        medium: '1.2rem',
        large: '1.4rem',
        p: '1rem',
        h1: '1.6rem'
    },

    mediaQueries: {
        mobile: 'only screen and (max-width: 46.1875em)',
        tablet: 'only screen and (min-width: 46.25em) and (max-width: 63.9375em)',
        laptop: 'only screen and (min-width: 64em)'
    }
}