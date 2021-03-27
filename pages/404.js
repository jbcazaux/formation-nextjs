import Link from 'next/link'

const My404 = () => (
  <>
    <h2>Page Not Found :(</h2>
    <div>
      Please return to
      <Link href="/">
        <a>home page !</a>
      </Link>{' '}
    </div>
  </>
)

export default My404
