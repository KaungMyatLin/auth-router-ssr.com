import DefaultSiteLayout from '@cmpnt/layout/navigation/default_sitelayout'

export default function Home(props) {
  return (
    <DefaultSiteLayout ctxprop={props.ctxprop}>
      <h1>Welcome on Board!</h1>
    </DefaultSiteLayout>
  )
}
