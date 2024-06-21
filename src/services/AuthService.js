export async function autenticar(email, senha) {
  // Altere "password" para "senha"
  try {
    const response = await fetch(
      'https://localhost:5000/api/conta/autenticar',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }), // Altere para enviar "senha" em vez de "password"
      }
    )

    if (!response.ok) {
      throw new Error('Authentication failed')
    }

    const json = await response.json()

    if (json?.success) {
      const accessToken = json.data.accessToken
      // Formata como uma string Bearer
      const jwt = `Bearer ${accessToken}`
      // Armazena no localStorage
      localStorage.setItem('jwt', jwt)
    }

    return json
  } catch (error) {
    console.error('Authentication error:', error)
    throw error
  }
}
