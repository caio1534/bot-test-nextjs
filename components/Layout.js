import Navbar from './Navbar'

const Layout = (props) => (
    <div>
        {
        // <Navbar/> e <Footer/> em todas as páginas ?

        // sem os comentários dá este erro: 'Error: React.Children.only expected to receive a single React element child.'
        }
        {props.children}
    </div>
)

export default Layout;