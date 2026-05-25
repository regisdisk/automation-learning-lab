# ==================================================
# Filosofia operacional
# ==================================================

Git protege histórico.

Backup protege operação.

Ignore não protege nada.

Commit
≠
Push
≠
Merge

Commit:
    salva histórico.

Push:
    publica histórico.

Merge:
    integra histórico.


Antes de executar comandos destrutivos:

Perguntar:

1. Existe commit?
2. Existe push?
3. Existe backup?

Se qualquer resposta for NÃO:

    parar. 



# ==================================================
# Regras operacionais
# ==================================================

Antes de executar comandos destrutivos:

    git restore
    git reset
    git clean
    git push --force

Perguntar:

1. Existe commit?

2. Existe push?

3. Existe backup?

Se qualquer resposta for NÃO:

    parar.


Antes de executar:

    git add .

Perguntar:

    Estou adicionando
    apenas o que desejo publicar?


Antes de executar:

    git push

Perguntar:

    Existe algo ignorado
    que eu não posso perder?



==================================================
# 0. Start — criar uma branch saudável
# ==================================================

git checkout main
    Volta para branch principal.
    Objetivo:
        partir de uma base conhecida.

git pull
    Atualiza a main local.

    O que acontece:
        origin/main → main local

    Evita:
        criar branch já desatualizada.

git checkout -b feature/<topic>
    Cria nova branch e já troca para ela.

    Exemplo:
        feature/home-automation

    Modelo mental:
        branch = espaço seguro de experimentação



# ==================================================
# 1. Work — registrar progresso
# ==================================================

git status
    Mostra estado atual.

    Ler:
        Changes not staged
        Changes to be committed
        Untracked files

    Pergunta:
        "Estou prestes a commitar exatamente o que quero?"


git add .
    Move alterações para staging area.

    Você está dizendo:
        "essas mudanças entram no próximo commit"

    Cuidado:
        git add . adiciona muita coisa.

    Quando revisar:
        projetos com secrets
        screenshots
        exports


git commit -m "feat(scope): description"
    Cria snapshot lógico do projeto.

    Boa prática:
        commits pequenos.

    Tipos:

        feat
            nova funcionalidade

        fix
            correção

        refactor
            reorganização

        docs
            documentação

        test
            validação

        chore
            manutenção

    Exemplos:

        feat(automation): add HA integration

        docs(workflow-05): add validation guide

        fix(n8n): handle sender routing

    Modelo mental:

        Commit
        ≠
        Publicação



# ==================================================
# 2. Publish feature — publicar trabalho
# ==================================================

git push -u origin feature/<topic>
    Publica branch remota.

    O que acontece:

        commits
        +
        referência da branch

    Resultado:

        origin/feature/<topic>

    Sem isso:
        GitHub não vê nada.

    Modelo mental:

        Commit salva.
        Push publica.



# ==================================================
# 3. Sync — atualizar feature
# ==================================================

git checkout main
    Volta para principal.

git pull
    Busca mudanças mais recentes.

git checkout feature/<topic>
    Retorna para desenvolvimento.

git rebase main
    Reaplica commits da feature
    em cima da main atual.

    Antes:

        main ----A----B
                 \
        feature ---C

    Depois:

        main ----A----B----C'

    Benefício:
        histórico linear.

    Atenção:
        rebase reescreve histórico.


git push --force-with-lease
    Atualiza branch após rebase.

    Use:
        somente após rebase.

    Nunca usar:

        git push --force



# ==================================================
# 4. Integrate — integrar
# ==================================================

git checkout main
    Volta para principal.

git merge --ff-only feature/<topic>
    Integra apenas se histórico estiver linear.

    Fast Forward:

        main ----A----B
                        \
                         C

    Resultado:

        main ----A----B----C

    Benefício:
        sem merge commit desnecessário.

    Se falhar:
        revisar rebase.



# ==================================================
# 5. Pre-Publish Check — validar antes de publicar
# ==================================================

git status
    Confirmar:

        working tree clean

    Esperado:

        nothing to commit

    Pergunta:

        "Estou publicando exatamente o que pretendo?"


git ls-files \
--others \
--ignored \
--exclude-standard

    Mostra:

        arquivos ignorados
        arquivos fora do Git

    Objetivo:

        identificar ativos que NÃO serão publicados.

    Exemplos:

        workflow-local.json
        docker-compose.override.yml
        topology.png

    Pergunta:

        "Existe algo aqui que eu não posso perder?"

    Se SIM:

        confirmar backup externo

    Importante:

        .gitignore
        ≠
        backup


git log \
--oneline \
--graph \
--decorate \
-10

    Validar:

        posição do HEAD
        histórico
        commits esperados

    Pergunta:

        "Minha história Git está correta?"



# ==================================================
# 7. Validate — validar estado
# ==================================================

git status
    Esperado:

        working tree clean

git log --oneline --graph --decorate -10
    Visualizar:

        linearidade
        branches
        merges
        posição do HEAD

    Pergunta:

        "O histórico conta a história correta?"



# ==================================================
# 8. Cleanup — encerrar ciclo
# ==================================================

git branch -d feature/<topic>
    Remove branch local.

    Só funciona:
        se já integrada.

git push origin --delete feature/<topic>
    Remove branch remota.

    Benefício:
        repositório limpo.



# ==================================================
# Final sanity check
# ==================================================

git status

Esperado:

    working tree clean


git log \
--oneline \
--graph \
--decorate \
-10

Perguntas finais:

1. Meu commit está no remoto?

2. Minha branch foi integrada?

3. Meu histórico ficou linear?

4. Existe algum arquivo ignorado
   que ainda não foi protegido?

5. Se eu perder este notebook agora,
   consigo reconstruir o projeto?


Se NÃO:

    revisar antes de encerrar.



# ==================================================
# Recovery (usar raramente)
# ==================================================

git restore .
    Descarta mudanças locais.

    Use quando:

        arquivos foram alterados
        mas não devem existir.

    Não recupera:
        arquivos ignorados.


git reset --hard origin/<branch>
    Sincroniza branch local
    com remoto.

    O que acontece:

        Working tree
        ↓
        último push

    CUIDADO:

        perde alterações locais
        não commitadas


git clean -fd
    Remove:

        untracked files
        diretórios órfãos

    Não remove:
        arquivos versionados

    CUIDADO:

        irreversível


git clean -fdx
    Remove também:

        arquivos ignorados

    Exemplo:

        private/
        exports/

    Executar somente se:

        existe backup


