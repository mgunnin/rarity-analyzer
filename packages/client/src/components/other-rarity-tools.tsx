export const OtherRarityTools = () => {
  return (
    <>
      <div style={{ margin: 8, marginTop: 64 }}>
        <div>Welcome to the Metarena-Verse</div>
        <OtherRarityTool name="Esports One" url="https://esportsone.com/" />
        <OtherRarityTool name="OneDAO" url="https://e1.gg/wiki" />
        <OtherRarityTool name="Whitepaper" url="https://e1.gg/whitepaper/" />
      </div>
    </>
  )
}

const OtherRarityTool = ({ url, name }: { name: string; url: string }) => {
  return (
    <>
      <div>
        <a href={url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </div>
    </>
  )
}
