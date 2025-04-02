
# Define o nome do usuário
$ git config --global user.name "Seu Nome"

# Define o email do usuário
$ git config --global user.email "seuemail@example.com"

# Exibe a configuração atual do Git
$ git config --list

# Inicializa um novo repositório Git
$ git init

# Clona um repositório remoto
$ git clone <URL_DO_REPOSITORIO>

# Verifica o status do repositório
$ git status

# Adiciona arquivos ao staging area
$ git add <arquivo>  # Adiciona um arquivo específico
$ git add .          # Adiciona todos os arquivos modificados

# Remove arquivos do staging area
$ git reset <arquivo>

# Faz um commit com uma mensagem
$ git commit -m "Mensagem do commit"

# Modifica a mensagem do último commit (se ainda não foi enviado)
$ git commit --amend -m "Nova mensagem do commit"

# Exibe o histórico de commits
$ git log
$ git log --oneline --graph --all --decorate  # Exibe um log resumido

# Exibe as diferenças entre versões
$ git diff  # Compara mudanças não adicionadas
$ git diff --staged  # Compara mudanças que já foram adicionadas ao staging

# Lista os branches (ramificações)
$ git branch  # Exibe os branches locais
$ git branch -a  # Exibe todos os branches (locais e remotos)

# Cria um novo branch
$ git branch <nome-do-branch>

# Troca para um branch específico
$ git checkout <nome-do-branch>

# Cria um novo branch e já troca para ele
$ git checkout -b <nome-do-branch>

# Mescla um branch ao branch atual
$ git merge <nome-do-branch>

# Resolve conflitos de merge manualmente e depois confirma o merge
$ git add .
$ git commit -m "Resolvidos conflitos de merge"

# Renomeia um branch
$ git branch -m <novo-nome>

# Deleta um branch local
$ git branch -d <nome-do-branch>

# Deleta um branch remoto
$ git push origin --delete <nome-do-branch>

# Lista os repositórios remotos configurados
$ git remote -v

# Adiciona um repositório remoto
$ git remote add origin <URL_DO_REPOSITORIO>

# Remove um repositório remoto
$ git remote remove origin

# Envia as alterações para o repositório remoto
$ git push origin <branch>
$ git push -u origin <branch>  # Define o branch como padrão para futuros push

# Puxa as alterações do repositório remoto
$ git pull origin <branch>

# Reverte alterações de um commit específico
$ git revert <id-do-commit>

# Retorna um branch para um estado anterior
$ git reset --hard <id-do-commit>

# Ignora arquivos específicos (adicione os padrões ao .gitignore)
$ echo "*.log" >> .gitignore
$ git add .gitignore
$ git commit -m "Adicionando .gitignore"

# Stash: salva alterações temporariamente
$ git stash  # Guarda as mudanças sem commitar
$ git stash list  # Lista os stashes salvos
$ git stash apply  # Aplica o último stash
$ git stash drop  # Remove o último stash

# Rebase: reescreve a história dos commits
$ git rebase <branch>

# Mostra os arquivos alterados em um commit específico
$ git show <id-do-commit>

# Mostra quem editou cada linha de um arquivo
$ git blame <arquivo>