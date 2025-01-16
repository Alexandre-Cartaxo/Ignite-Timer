import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, i) => {
              // Gerar 10 estruturas do return
              return (
                <tr key={i}>
                  <td>Estudar</td>
                  <td>2h</td>
                  <td>Há 2 meses</td>
                  <td>
                    {i > 3 ? (
                      <Status statusColor="green">Concluído</Status>
                    ) : (
                      <Status statusColor="yellow">Em andamento</Status>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
