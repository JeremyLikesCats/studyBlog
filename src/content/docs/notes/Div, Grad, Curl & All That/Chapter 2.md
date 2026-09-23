---
title: "Chapter 2: Surface Integrals and the Divergence"
---

## Gauss's Law

Gauss's Law states that:
$$
\int \int _S \mathbf{E} \cdot \hat{n} dS = \frac{q}{\epsilon_0}
$$
where $q$ is the charge enclosed by the surface.

## The Unit Normal Vector

What is the $\hat{n}$ we used in our definition of Gauss's law? It's a unit vector that is normal to a certain surface. We can find $\hat{n}$ by finding two coplanar vectors along the plane of the area, $\mathbf{u} and \mathbf{v}$:

$$
\hat{n} = \frac{\mathbf{u} \times \mathbf{v}}{|\mathbf{u} \times \mathbf{v}|}.
$$

(Check the book for more detailed derivation)

### Derivation

First:
$$
\mathbf{u} = \left[\hat{i} + \frac{\partial f}{\partial x} \hat{k} \right] u_x
$$

Second:
$$
\mathbf{v} = \left[\hat{j} + \frac{\partial f}{\partial y} \hat{k} \right] v_y
$$

Then:
$$
\mathbf{u} \times \mathbf{v} = \begin{pmatrix}
    u_x \\
    0 \\
    u_x \frac{\partial f}{\partial x}
\end{pmatrix}
\times
\begin{pmatrix}
    0 \\
    v_y \\
    v_y \frac{\partial f}{\partial y}
\end{pmatrix}
$$


