nuns = input("insira numeros separados por espaços: ")

nuns_array = nuns.split(" ")

sum = 0

for num in nuns_array:
    if not num.isdigit():
        print(f"{num} não é um número")
    else:
        sum += int(num)

print(f"a soma dos valores vlaidos é: {sum}")
