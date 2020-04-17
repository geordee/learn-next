import Header from './Header';

const Layout = (props) => (
  <div id="container">
    <Header />
    {props.children}
    <style jsx>{`
      div#container {
        margin: 20px;
        padding: 20px;
        border: 1px solid #DDD;
      }
    `}</style>
  </div>
);

export default Layout;
