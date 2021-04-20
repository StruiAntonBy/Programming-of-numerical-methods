import sys


def print_matrix(matrix, name, file=sys.stdout):
    print(name, file=file)
    for row in matrix:
        for elem in row:
            print(elem, end=" ", file=file)
        print(file=file)
    print(file=file)


def print_vector(vector, name_unknown, file=sys.stdout):
    for i, elem in enumerate(vector, 1):
        print("{0}{1} = {2}".format(name_unknown, i, elem), file=file)
    print(file=file)
