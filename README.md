# **Calendário de Agendamentos**

## **Descrição**

A aplicação tem como objetivo fornecer um sistema de agendamentos de compromissos, permitindo que os usuários visualizem, adicionem, editem e excluam compromissos de maneira fácil e intuitiva. O calendário interativo permite que os usuários filtrem os compromissos por data e exibam as informações de forma organizada.

A aplicação segue boas práticas de desenvolvimento, incluindo:

- **Responsabilidade Única (Single Responsibility Principle)**: Cada componente e função tem uma responsabilidade clara e única, o que facilita a manutenção e a escalabilidade da aplicação.
- **Gerenciamento eficiente de estado com Redux**: A aplicação utiliza Redux para gerenciar o estado global, garantindo que as modificações nos dados sejam refletidas de maneira consistente e previsível em toda a aplicação.
- **Componentização com Styled Components**: Os componentes são reutilizáveis e com estilo modular, facilitando a manutenção e a personalização da interface.
- **Filtros dinâmicos e interatividade**: Utilização de componentes como Material-UI (MUI) para permitir a filtragem dinâmica de compromissos e a interação com o calendário.
- **Notificações de feedback**: A integração com a biblioteca Toastify garante que o usuário receba notificações claras sobre ações de sucesso ou falha.

### **Funcionalidades Principais:**
- Exibição de consultas em um calendário interativo.
- Filtro de consultas por data.
- Adição, edição e exclusão de compromissos.
- Notificações de sucesso/erro/informações usando **Toastify**.
- Gerenciamento eficiente de estado com **Redux**.

## **Tecnologias Utilizadas**

- **React**: Biblioteca JavaScript para a construção da interface de usuário.
- **Typescript**: Para uma melhor segurança e robustez no projeto.
- **Redux**: Para gerenciar o estado da aplicação de maneira global e eficiente.
- **Styled Components**: Para estilizar os componentes da aplicação de forma modular e com escopo local.
- **Toastify**: Biblioteca para exibir notificações simples e elegantes (sucesso, erro, etc.).
- **Material-UI **: Framework de UI para construção do calendário interativo e outros componentes da interface.

## **Instalação e Execução**

### **Passo 1: Clonar o repositório**
Clone este repositório para sua máquina local utilizando o comando:

```bash
git clone https://github.com/AlissonDevPort/advice-heatl
```
Passo 2: Instalar as dependências
Entre na pasta do projeto e instale as dependências:

```bash
npm install
```
Passo 3: Iniciar a aplicação
Após a instalação das dependências, inicie a aplicação:
```bash
npm run dev
```


## **Imagens da Aplicação**

### Tela Principal com Calendário e Agendamentos
![Tela Principal](assets/home.png)

### Adicionando um Novo Agendamento
![Adicionar Agendamento](assets/modal-view.png)

### Notificação de Sucesso
![Notificação de Sucesso](assets/redux-view.png)

---
