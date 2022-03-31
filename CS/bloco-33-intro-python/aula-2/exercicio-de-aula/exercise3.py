file = open("exercise3.txt", mode="r")
content = file.read()

content_array = content.split("\n")

alunos = []

alunos_aprovados = []

for item in content_array:
    alunos.append(item.split(" "))

for aluno in alunos:
    if int(aluno[1]) >= 6:
        alunos_aprovados.append(aluno[0])

print(alunos)
print(alunos_aprovados)
file.close()


file = open("exercise3_resolution.txt", mode="w")
file.write("\n".join(alunos_aprovados))
file.close()
