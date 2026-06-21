# Caixa JL — App Android

Este repositório empacota o Caixa JL (controle financeiro de entradas e saídas) como um app Android nativo, usando [Capacitor](https://capacitorjs.com).

O app fica protegido por PIN (4 dígitos) e cada aparelho salva seus próprios lançamentos separadamente no Firebase.

## Como gerar o APK (sem instalar nada no computador)

1. Suba este repositório inteiro para o GitHub (veja abaixo "Como subir pro GitHub").
2. No GitHub, vá na aba **Actions** do repositório.
3. Clique no workflow **Build APK** na lista à esquerda.
4. Clique em **Run workflow** → **Run workflow** (botão verde).
5. Aguarde cerca de 3 a 5 minutos até o ícone ficar verde (✅).
6. Clique na execução concluída, role até **Artifacts**, e baixe **jl-caixa-apk**.
7. Dentro do zip baixado está o `app-debug.apk` — transfira para o celular e instale (pode ser necessário permitir "instalar de fontes desconhecidas" nas configurações do Android).

Esse processo roda automaticamente também toda vez que você enviar (`push`) uma alteração para a branch `main`.

## Como subir pro GitHub (pelo celular)

1. Crie um repositório novo no GitHub chamado, por exemplo, `JL-caixa-app`.
2. Faça upload de **todos os arquivos e pastas** deste pacote (incluindo a pasta oculta `.github`) — pelo app do GitHub ou pelo site, em "Add file" → "Upload files". É importante manter a estrutura de pastas intacta.
3. Depois do upload, vá em **Actions** e siga os passos acima.

## Atualizar o app no futuro

Quando o Caixa JL tiver uma nova versão, basta substituir o arquivo `www/index.html` deste repositório pelo novo HTML e fazer commit — o GitHub Actions builda um novo APK automaticamente.

## Importante sobre revogar acesso

Como o app fica empacotado dentro do APK (não carrega um link ao vivo), trocar o nome de um repositório de hospedagem **não revoga** o acesso de quem já instalou o APK — o Firebase continua acessível normalmente. A única trava real aqui é o PIN de entrada.

## Estrutura

- `www/index.html` — o app Caixa JL (HTML/JS single-file)
- `android/` — projeto nativo Android gerado pelo Capacitor
- `.github/workflows/build-apk.yml` — automação que compila o APK na nuvem
- `capacitor.config.ts` — configurações do app (nome, ID do pacote)
