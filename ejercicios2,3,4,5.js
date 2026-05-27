// EJERCICIO 2 - SISTEMA DE ALUMNOS

const sistemaAlumnos = {
    alumnos: [],

    agregarAlumno(nombre, edad, carrera, notas) {
        this.alumnos.push({
            nombre,
            edad,
            carrera,
            notas
        });
    },

    calcularPromedio(notas) {
        const suma = notas.reduce((acumulador, nota) => {
            return acumulador + nota;
        }, 0);

        return suma / notas.length;
    },

    mostrarPromedios() {
        this.alumnos.forEach(alumno => {
            const promedio = this.calcularPromedio(alumno.notas);
            console.log(`${alumno.nombre} tiene promedio ${promedio}`);
        });
    },

    mostrarAprobados() {
        const aprobados = this.alumnos.filter(alumno => {
            return this.calcularPromedio(alumno.notas) >= 6;
        });

        console.log("Alumnos aprobados:");
        console.log(aprobados);
    },

    mostrarMejorPromedio() {
        const mejorAlumno = this.alumnos.reduce((mejor, alumno) => {
            return this.calcularPromedio(alumno.notas) > this.calcularPromedio(mejor.notas)
                ? alumno
                : mejor;
        });

        console.log("Alumno con mejor promedio:");
        console.log(mejorAlumno);
    },

    buscarPorCarrera(carrera) {
        const encontrados = this.alumnos.filter(alumno => {
            return alumno.carrera === carrera;
        });

        console.log(`Alumnos de la carrera ${carrera}:`);
        console.log(encontrados);
    }
};

sistemaAlumnos.agregarAlumno("Juan", 20, "Sistemas", [8, 7, 9]);
sistemaAlumnos.agregarAlumno("Ana", 22, "Diseño", [4, 5, 6]);
sistemaAlumnos.agregarAlumno("Pedro", 21, "Sistemas", [10, 9, 9]);

sistemaAlumnos.mostrarPromedios();
sistemaAlumnos.mostrarAprobados();
sistemaAlumnos.mostrarMejorPromedio();
sistemaAlumnos.buscarPorCarrera("Sistemas");


// EJERCICIO 3 - SISTEMA DE PEDIDOS DE COMIDA

const sistemaPedidos = {
    pedidos: [],

    agregarPedido(cliente, productos, total) {
        this.pedidos.push({
            cliente,
            productos,
            total,
            entregado: false
        });
    },

    mostrarPendientes() {
        const pendientes = this.pedidos.filter(pedido => {
            return pedido.entregado === false;
        });

        console.log("Pedidos pendientes:");
        console.log(pendientes);
    },

    calcularTotalVendido() {
        const total = this.pedidos.reduce((acumulador, pedido) => {
            return acumulador + pedido.total;
        }, 0);

        console.log(`Total vendido: $${total}`);
    },

    mostrarEntregados() {
        const entregados = this.pedidos.filter(pedido => {
            return pedido.entregado === true;
        });

        console.log("Pedidos entregados:");
        console.log(entregados);
    },

    marcarComoEntregado(cliente) {
        const pedido = this.pedidos.find(pedido => {
            return pedido.cliente === cliente;
        });

        if (pedido) {
            pedido.entregado = true;
            console.log(`El pedido de ${cliente} fue marcado como entregado.`);
        } else {
            console.log("Pedido no encontrado.");
        }
    }
};

sistemaPedidos.agregarPedido("Carlos", ["Pizza", "Gaseosa"], 12000);
sistemaPedidos.agregarPedido("María", ["Hamburguesa"], 8000);
sistemaPedidos.agregarPedido("Lucas", ["Empanadas"], 6000);

sistemaPedidos.mostrarPendientes();
sistemaPedidos.calcularTotalVendido();
sistemaPedidos.marcarComoEntregado("Carlos");
sistemaPedidos.mostrarEntregados();


// EJERCICIO 4 - SISTEMA DE PELÍCULAS

const sistemaPeliculas = {
    peliculas: [],

    agregarPelicula(titulo, genero, duracion, puntuacion) {
        this.peliculas.push({
            titulo,
            genero,
            duracion,
            puntuacion
        });
    },

    mostrarPorGenero(genero) {
        const peliculasGenero = this.peliculas.filter(pelicula => {
            return pelicula.genero === genero;
        });

        console.log(`Películas del género ${genero}:`);
        console.log(peliculasGenero);
    },

    mostrarMejorPuntuada() {
        const mejor = this.peliculas.reduce((mejor, pelicula) => {
            return pelicula.puntuacion > mejor.puntuacion
                ? pelicula
                : mejor;
        });

        console.log("Película mejor puntuada:");
        console.log(mejor);
    },

    mostrarPeliculasLargas() {
        const largas = this.peliculas.filter(pelicula => {
            return pelicula.duracion > 120;
        });

        console.log("Películas largas:");
        console.log(largas);
    },

    calcularPromedioPuntuaciones() {
        const suma = this.peliculas.reduce((acumulador, pelicula) => {
            return acumulador + pelicula.puntuacion;
        }, 0);

        const promedio = suma / this.peliculas.length;

        console.log(`Promedio de puntuaciones: ${promedio}`);
    }
};

sistemaPeliculas.agregarPelicula("Interestelar", "Ciencia Ficción", 169, 9);
sistemaPeliculas.agregarPelicula("Shrek", "Animación", 90, 8);
sistemaPeliculas.agregarPelicula("Batman", "Acción", 150, 7);

sistemaPeliculas.mostrarPorGenero("Acción");
sistemaPeliculas.mostrarMejorPuntuada();
sistemaPeliculas.mostrarPeliculasLargas();
sistemaPeliculas.calcularPromedioPuntuaciones();


// EJERCICIO 5 - SISTEMA BANCARIO

const sistemaBancario = {
    cuentas: [],

    agregarCuenta(titular, saldo, tipoCuenta) {
        this.cuentas.push({
            titular,
            saldo,
            tipoCuenta,
            activa: true
        });
    },

    depositar(titular, monto) {
        const cuenta = this.cuentas.find(cuenta => {
            return cuenta.titular === titular;
        });

        if (cuenta) {
            cuenta.saldo += monto;
            console.log(`${titular} depositó $${monto}`);
        } else {
            console.log("Cuenta no encontrada.");
        }
    },

    retirar(titular, monto) {
        const cuenta = this.cuentas.find(cuenta => {
            return cuenta.titular === titular;
        });

        if (cuenta) {
            if (cuenta.saldo >= monto) {
                cuenta.saldo -= monto;
                console.log(`${titular} retiró $${monto}`);
            } else {
                console.log(`${titular} no tiene saldo suficiente.`);
            }
        } else {
            console.log("Cuenta no encontrada.");
        }
    },

    mostrarCuentasActivas() {
        const activas = this.cuentas.filter(cuenta => {
            return cuenta.activa === true;
        });

        console.log("Cuentas activas:");
        console.log(activas);
    },

    mostrarCuentaMayorSaldo() {
        const mayor = this.cuentas.reduce((mayor, cuenta) => {
            return cuenta.saldo > mayor.saldo
                ? cuenta
                : mayor;
        });

        console.log("Cuenta con mayor saldo:");
        console.log(mayor);
    }
};

sistemaBancario.agregarCuenta("Juan", 50000, "Corriente");
sistemaBancario.agregarCuenta("Ana", 120000, "Caja de Ahorro");
sistemaBancario.agregarCuenta("Pedro", 1000, "Corriente");

sistemaBancario.depositar("Juan", 10000);
sistemaBancario.retirar("Pedro", 500);
sistemaBancario.mostrarCuentasActivas();
sistemaBancario.mostrarCuentaMayorSaldo();
