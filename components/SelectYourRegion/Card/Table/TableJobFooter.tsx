import { style } from 'components/SelectYourRegion/styles'
import useWindowDimensions from 'hooks/useWindowsDimensions'

const TableJobFooter = ({ handleButton }) => {
  const { width } = useWindowDimensions()

  return (
    <article
      css={[style.table.article, { justifyContent: 'space-between' }, width < 900 && { flexDirection: 'column-reverse' }]}
      className='justify-between items-center gap-4 p-2'
    >
      <p css={style.table.footer_text}>
        Click to select date & time. Click & drag to select multiple dates &
        times. Click day to select all times available.
      </p>
      <div css={style.table.buttons}>
        <button type="button" onClick={() => handleButton(true)} css={style.table.btn}>Check all</button>
        <button type="button" onClick={() => handleButton(false)} css={style.table.btn}>Clear</button>
      </div>
    </article>
  )
}


export default TableJobFooter
