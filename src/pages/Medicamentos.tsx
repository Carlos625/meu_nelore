          <tbody className="bg-white divide-y divide-gray-200">
            {medicamentos.map(medicamento => {
              const animal = animais.find(a => a.brinco === medicamento.animalBrinco)
              return (
                <tr key={medicamento.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {animal ? `${animal.brinco} - ${animal.nome || 'Sem nome'}` : 'Animal não encontrado'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{medicamento.nome || 'Não informado'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{medicamento.dosagem || 'Não informada'}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {medicamento.dataAplicacao instanceof Date 
                      ? medicamento.dataAplicacao.toLocaleDateString('pt-BR')
                      : medicamento.dataAplicacao?.toDate 
                        ? medicamento.dataAplicacao.toDate().toLocaleDateString('pt-BR')
                        : typeof medicamento.dataAplicacao === 'string'
                          ? new Date(medicamento.dataAplicacao).toLocaleDateString('pt-BR')
                          : 'Data não informada'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{medicamento.observacoes || '-'}</td>
                </tr>
              )
            })}
          </tbody> 