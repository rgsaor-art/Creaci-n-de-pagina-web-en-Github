# Vida en Equilibrio — Proyecto colaborativo

Sitio web colaborativo sobre hábitos saludables. El proyecto cumple con el requisito de **4 secciones/páginas**, una por integrante.

## Estructura

- `index.html` — página principal y punto de entrada.
- `integrante1.html` — Integrante 1: Hidratación.
- `integrante2.html` — Integrante 1: Actividad física.
- `integrante3.html` — Integrante 2: Alimentación equilibrada.
- `integrante4.html` — Integrante 2: Descanso y sueño.
- `css/estilos.css` — estilos compartidos.
- `js/script.js` — modo claro/oscuro.

## Requisitos de GitHub

1. El repositorio debe tener una rama principal llamada `main`.
2. Crear una rama independiente para cada integrante a partir de `main`.
3. Cada integrante trabaja únicamente en su rama para desarrollar su sección.
4. Cada integrante hace sus commits desde su propia cuenta.
5. Al terminar, cada integrante crea un **Pull Request** de su rama hacia `main`.
6. Después de revisar el Pull Request, realizar el **merge**.
7. Comprobar que `main` contiene las cuatro secciones y que todos los enlaces funcionan.

## Ramas sugeridas

- `integrante-1`
- `integrante-1`
- `integrante-2`
- `integrante-2`

## Flujo de trabajo recomendado

```bash
git clone URL_DEL_REPOSITORIO
cd vida-en-equilibrio
git checkout main
git pull origin main

git checkout -b integrante-1
# Cada integrante cambia el número de su rama
```

Después de trabajar:

```bash
git add .
git commit -m "Agrega sección de hidratación"
git push -u origin integrante-1
```

En GitHub: **Pull requests → New pull request → base: main ← compare: integrante-1 → Create pull request**.

Después del merge:

```bash
git checkout main
git pull origin main
```

> Importante: cada integrante debe utilizar su propia cuenta de GitHub para que las contribuciones queden registradas correctamente.
