import { colors } from "utils/constants";

export const style = {
  tabContent: {
    title: { fontSize: 24, marginBottom: 25, color: '#545658' },
    date: { fontSize: 13, marginBottom: 70, color: colors.textGray },
    text: {
      color: colors.black00,
      marginBottom: 20,
      lineHeight: '24px',
    },
    link: {
      cursor: 'pointer',
      transition: 'color 0.3s',
      color: colors.lightBlue,
      ':hover': {
        color: colors.blue
      }
    }
  }
}