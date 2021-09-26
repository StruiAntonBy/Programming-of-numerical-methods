import math
import decimal

INTERVAL = [decimal.Decimal("-3"), decimal.Decimal("-2")]
INTEGRAND_FUNC = lambda x: x / ((x + 1)**2)
PRIMITIVE_FUNC = lambda x: (x / 2) - 0.25 * math.log(abs(2 * x + 1))
N1 = 10  # Методы прямоугольников, трапеций
N2 = 10  # Метод парабол
N3 = 6  # Метод Гаусса
