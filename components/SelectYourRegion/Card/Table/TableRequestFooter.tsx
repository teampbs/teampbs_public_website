import { style } from 'components/SelectYourRegion/styles'

const TableRequestFooter = () => (
  <article
    css={[
      style.table.article,
      { justifyContent: 'space-between', minWidth: '50vw' },
    ]}
  >
    <p className='text-sm'>
      Tutorial: <br />
      Click once to select/unselect box. <br />
      Click and drag to select more box at once. <br />
      Click day to select all times available <br />
    </p>
  </article>
)

export default TableRequestFooter
