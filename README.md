

---

# GeraNumApp

Aplicativo mobile para geração de números aleatórios, desenvolvido com **React Native** e **Expo**, permitindo que o usuário gere um número aleatório entre 1 e 100 de forma simples e rápida.

## Funcionalidades

- Geração de números aleatórios entre 1 e 100.
- Interface simples e intuitiva.
- Desenvolvido com **React Native** e **Expo** para dispositivos móveis.

## Tecnologias Utilizadas

- **React Native**: Biblioteca para o desenvolvimento de aplicativos móveis nativos.
- **Expo**: Ferramenta que facilita o desenvolvimento e o teste de aplicativos React Native.
- **JavaScript/TypeScript**: Linguagens usadas no desenvolvimento do aplicativo.

## Como Rodar o Aplicativo

### 1. Clonando o repositório

Primeiro, clone o repositório em sua máquina:

```bash
git clone https://github.com/seu-usuario/GeraNumApp.git
```

### 2. Instalando as dependências

Entre na pasta do projeto:

```bash
cd GeraNumApp
```

Instale as dependências utilizando o comando:

```bash
npm install
```

ou, se estiver usando **Yarn**:

```bash
yarn install
```

### 3. Rodando o aplicativo

Se você já tem o **Expo** instalado, basta rodar o seguinte comando:

```bash
expo start
```

Isso abrirá o **Metro Bundler** em seu navegador, e você poderá escanear o código QR com o aplicativo **Expo Go** em seu celular para testar o aplicativo. Caso não tenha o **Expo Go**, você pode instalá-lo na Play Store ou App Store.

### 4. Rodando no Emulador (Opcional)

Se você preferir rodar o aplicativo em um emulador, use os comandos:

- **Para Android**:
  ```bash
  expo start --android
  ```

- **Para iOS** (somente no macOS):
  ```bash
  expo start --ios
  ```

## Estrutura do Projeto

```
GeraNumApp/
├── App.tsx           # Componente principal do aplicativo
├── components/       # Contém componentes reutilizáveis
│   └── Aleatorio.tsx # Componente para gerar números aleatórios
├── package.json      # Dependências do projeto
└── tsconfig.json     # Configurações do TypeScript
```

## Contribuindo

1. Faça um fork do projeto.
2. Crie uma nova branch (`git checkout -b feature/nome-da-feature`).
3. Faça suas alterações e commit (`git commit -am 'Adicionando nova feature'`).
4. Envie para o seu fork (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request para a branch `main` do repositório original.

## Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

---

Com esse `README.md`, qualquer pessoa pode entender rapidamente como rodar o seu aplicativo, o que ele faz, e como contribuir.

