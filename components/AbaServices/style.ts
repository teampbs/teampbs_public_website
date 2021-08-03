import { mq } from "styles/styles";
import { colors } from "utils/constants";

export const style = {
  box_position: mq({
    width: ['100%', '100%', '100%', '400px'],
    margin: ['auto', 'auto', 'auto', 'auto']
  }),
  box: { width: '635px', height: '33%', margin: '0 auto 2.5rem auto', padding: '14rem 0 0' },
  boxSmall: mq({ width: '635px', height: '33%', margin: '0 0 2.5rem 0', padding: ['8rem 0 8rem 0', '8rem 0 8rem 0', '8rem 0 8rem 0', '8rem 0 8rem 8rem'] }),
  toggle: { width: '400px', margin: 'auto', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem' },
  expand: {
    text: { color: colors.lightBlue, fontSize: '1rem', fontWeight: 600, paddingRight: '1.5rem', backgroundSize: '10px 6px' },
    arrow_down: { background: 'url(images/shared/bottom_arrow_blue.png) no-repeat right' },
    arrow_up: { background: 'url(images/shared/top_arrow_blue.png) no-repeat right' },
  },
  process: {
    wrapper: { margin: '5rem 0 0 0', padding: '3rem 0', background: colors.blueMild },
    title: { fontSize: '30px', padding: '0 0 48px 0' },
    cardsBox: { padding: '0 3rem 3rem', gap: '.5rem' },
    card: {
      padding: '48px 45px 0 35px',
      position: 'relative',
      background: colors.white,
      height: 460, 
      boxShadow: '0px 7px 12px rgb(100 100 100 / 7%)',
    },
    card_title: { fontSize: '26px', padding: '0 0 48px 0' },
    list: { 
      height: 460, 
      '& > li': { fontSize: '15px', lineHeight: '20px', color: '#242c37', margin: '0 0 17px' },
    },
    list_arrow: {
      ':before': {
        content: `''`,
        width: '100%',
        height: '100%',
        background: `url(/images/pages/AbaServices/process_arrow.png) no-repeat`,
        backgroundPosition: '98% 60px',
        position: 'absolute',
        zIndex: 9999,
      }
    }
  }
}

