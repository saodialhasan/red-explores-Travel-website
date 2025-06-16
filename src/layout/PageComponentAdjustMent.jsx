
import Header from './Header'
import Footer from './Footer'

function PageComponentAdjustMent() {
  return (
    <div>
        <Header/>
      <slot/>
        <Footer/>

    </div>
  )
}

export default PageComponentAdjustMent