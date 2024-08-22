const URL = 'https://e47c4ad4-a578-46c2-94a3-01b4a915541f-00-27o06tbt2038h.spock.replit.dev/contacts'


export async function findAll() {
  const requestInit = {
    method: 'GET',
    headers: {
      Authorization: '12116310'
    }
  }

  const resposeHttp = await fetch(URL, requestInit)

  if(resposeHttp.ok) {
    const responseBody = await resposeHttp.json()

    return responseBody.data
  } else {
    console.log('Erro ao executar a api GET /contacts')

    throw new Error('Não foi possivel recuperar os contatos. Tente novamente em alguns minutos.')
  }
}

export function save() {

}

export async function remove(id) {
  const requestInit = {
    method: 'DELETE',
    headers: {
      Authorization: '12116310'
    }
  }

  const resposeHttp = await fetch(`${URL}/${id}`, requestInit)

  console.log('Status=', resposeHttp.status, 'OK=', resposeHttp.ok)

  if(!resposeHttp.ok) {
    console.log('Erro ao executar a api DELETE /contacts/{id}')

    throw new Error('Não foi possivel excluir o contato. Tente novamente em alguns minutos.')
  }
}

export function update() {

}
