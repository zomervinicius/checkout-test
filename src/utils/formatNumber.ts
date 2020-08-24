const realFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL'
})

function formatNumber(value: number): string {
  return realFormatter.format(value)
}

export default formatNumber
