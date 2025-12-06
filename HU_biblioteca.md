# Historia de usuario – Sistema de préstamos de la biblioteca escolar

## Historia de usuario

Como bibliotecaria de la escuela primaria,  
quiero registrar y controlar los préstamos de libros a socios habilitados,  
para asegurar que solo se presten ejemplares en buen estado y aplicar sanciones cuando corresponda.

## Reglas de negocio (resumen)

- Solo pueden realizar préstamos los socios en estado HABILITADO.
- Cada socio puede tener como máximo **tres préstamos vigentes** al mismo tiempo.
- No se prestan ejemplares con estado **DETERIORADO**.
- Si un préstamo vence y el socio devuelve el libro fuera de la fecha establecida, el socio queda **SUSPENDIDO por 15 días** sin poder realizar nuevos préstamos.

## Criterios de aceptación

### Escenario 1: Registro de préstamo válido

**Dado que** el socio está en estado HABILITADO, no tiene préstamos vencidos y tiene menos de tres préstamos vigentes,  
**y dado que** el ejemplar se encuentra DISPONIBLE y no está DETERIORADO,  
**cuando** la bibliotecaria registra un nuevo préstamo en el sistema,  
**entonces** se crea el préstamo con estado VIGENTE, se incrementa el número de préstamos del socio y el ejemplar pasa a estado PRESTADO.

### Escenario 2: Rechazo por límite de préstamos

**Dado que** el socio ya tiene tres préstamos con estado VIGENTE,  
**cuando** la bibliotecaria intenta registrar un nuevo préstamo,  
**entonces** el sistema no permite la operación y muestra un mensaje indicando que el socio alcanzó el número máximo de préstamos permitidos.

### Escenario 3: Suspensión por devolución tardía

**Dado que** el socio devuelve un libro después de la fecha de devolución establecida,  
**cuando** la bibliotecaria registra la devolución del préstamo,  
**entonces** el préstamo pasa a estado VENCIDO, el socio cambia a estado SUSPENDIDO,  
y el sistema registra una fecha de fin de suspensión exactamente 15 días después de la fecha de devolución.

### Escenario 4: Rechazo de préstamo por ejemplar deteriorado

**Dado que** un ejemplar de libro se encuentra en estado DETERIORADO,  
**cuando** la bibliotecaria intenta registrarlo en un nuevo préstamo,  
**entonces** el sistema rechaza el préstamo y muestra un mensaje indicando que el ejemplar no es prestable por su estado físico.
