import Document, { Html, Head, Main, NextScript } from "next/document";
import Link from "next/link";

class MainDocument extends Document {
  render() {
    return (
      <Html data-theme="cupcake">
        <Head>
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
            crossOrigin="anonymous"
          />
        </Head>
        <body>
          <div className="d-flex justify-content-between align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <Link href="/"><a className="text-dark"><h5 className="my-0 mr-md-auto font-weight-normal">Simplebooking</h5></a></Link>
            <div className="d-flex justify-content-between align-items-center">
              <nav className="my-2 my-md-0 mr-md-3">
                <Link href="/me">
                  <a className="p-2 text-dark mx-4">Profil</a>
                </Link>
              </nav>
              <Link href="/">
                <a className="btn btn-outline-primary">Booking</a>
              </Link>
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MainDocument;