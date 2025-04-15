import os

pasta = input("Digite o caminho da pasta com os arquivos: ")

arquivos = os.listdir(pasta)

for nome_antigo in arquivos:
    caminho_antigo = os.path.join(pasta, nome_antigo)
 
    if os.path.isdir(caminho_antigo):
        continue
    
    print(f"\nArquivo atual: {nome_antigo}")
    

    novo_nome = input("Digite o novo nome (sem extensão para manter a atual): ")
    
  
    _, extensao = os.path.splitext(nome_antigo)
    caminho_novo = os.path.join(pasta, novo_nome + extensao)
    
 
    os.rename(caminho_antigo, caminho_novo)
 
    print(f"Renomeado para: {novo_nome + extensao}")
