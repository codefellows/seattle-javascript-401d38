function History({ handleHistory, items }) {

  const style = {
    list: {
      height: '200px',
      width: '100%',
      border: 'red solid 20px',
    }
  }

  return (
    <ul style={style.list}>
      {items.map((item, i) => {
        // on click we set the form using a special handler for preformatted response data
        return <li onClick={() => handleHistory({ method: item.method, url: item.url, body: item.body })} key={i}>{item.method} {item.url}</li>
      })}
    </ul>
  )

}

export default History;
