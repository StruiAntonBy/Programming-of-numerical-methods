import numpy as np
from math import factorial, e

X0 = 5  # начало отрезка
Xn = 10  # конец отрезка
H = 1  # шаг
N1 = 3
N2 = 3
T1 = 6.81
T2 = 8.27
T3 = 9.01
POINTS = [T1, T2, T3]
X = np.linspace(X0, Xn, 100)  # от X0 до Xn сделать 100 точек

NUM_POINTS_IN_X = list()  # номера точек в массиве
_t = 0
for i, elem in enumerate(X):
    if _t == 3:
        break
    if elem >= POINTS[_t]:
        X[i] = POINTS[_t]
        NUM_POINTS_IN_X.append(i)
        _t += 1

FUNC = 5 * X - 8 * np.log(X) - 8  # f(x)
IMPL_FUNC = lambda x: 0.25 * ((e **(0.5*x))-x)  # реализация f(x)


def der_function(n, x0):
    if n < 1:
        raise ValueError
    else:
        return 5 - 8 * (1 / x0) if n == 1 else 8 * factorial(n - 1) * pow(-1 / x0, n)


def max_value(a, b, n):
    if a >= b:
        raise ValueError
    else:
        if n == 0:
            if -1 <= a < 0 and -1 <= b < 0:
                return der_function(n + 1, b)
            elif 0 < a <= 1 and 0 < b < 1:
                return der_function(n + 1, a)
            elif -1 <= a < 0 or 0 < a <= 1:
                return der_function(n + 1, a)
            elif -1 <= b < 0 or 0 < b < 1:
                return der_function(n + 1, b)
            elif a > 1.6 or b > -1:
                return der_function(n + 1, b)
        else:
            if abs(a) > abs(b):
                return abs(der_function(n + 1, b))
            else:
                return abs(der_function(n + 1, a))


DER_FUNC = der_function  # производная функции n-го порядка в точке x0
MAX_DER_FUNC = max_value  # Mn
