const Filters = ({ filters, setFilters, marcas, onOrder }) => {

    const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    };

    return (
        <aside>
            <form onSubmit={(e) => e.preventDefault()}>
                <fieldset>
                <legend>Búsqueda</legend>
                <label htmlFor="search">Buscar:</label>
                <input
                    type="text"
                    id="search"
                    name="search"
                    placeholder="Palabra..."
                    value={filters.search}
                    onChange={handleChange}
                />
                </fieldset>
                <fieldset>
                <legend>Precios</legend>
                <p>
                    <label htmlFor="price-min">Mínimo:</label>
                    <input
                    type="number"
                    id="price-min"
                    name="price-min"
                    min={0} value={filters.min}
                    onChange={handleChange}
                    />
                </p>
                <p>
                    <label htmlFor="price-max">Máximo:</label>
                    <input
                    type="number"
                    id="price-max"
                    name="price-max"
                    min={0} value={filters.max}
                    onChange={handleChange}
                    />
                </p>
                </fieldset>
                <fieldset>
                <legend>Tipo de Productos</legend>
                <p>
                    <input
                    type="checkbox"
                    id="protectores"
                    name="protectores"
                    checked={filters.protectores}
                    onChange={handleChange}
                    />
                    <label htmlFor="protectores">Protectores</label>
                </p>
                <p>
                    <input
                    type="checkbox"
                    id="entrenamiento"
                    name="entrenamiento"
                    checked={filters.entrenamiento}
                    onChange={handleChange}
                    />
                    <label htmlFor="entrenamiento">Entrenamiento</label>
                </p>
                <p>
                    <input
                    type="checkbox"
                    id="dobok"
                    name="dobok"
                    checked={filters.dobok}
                    onChange={handleChange}
                    />
                    <label htmlFor="dobok">Dobok</label>
                </p>
                </fieldset>
                <fieldset>
                    <legend>Marca</legend>
                    <select id="marca" name="marca" value={filters.marca} onchange={handleChange}>
                        <option value="Todas">Todas</option>
                        {marcas.map((m) => (
                        <option key={m} value={m}>{m}</option>
                        ))}
                    </select>
                </fieldset>
                <select id="order" name="order" onChange={(e) => onOrder(e.target.value)} defaultValue="">
                    <option disabled value="">Seleccione un orden</option>
                    <option value="menor">Precio - de Menor a Mayor</option>
                    <option value="mayor">Precio - de Mayor a Menor</option>
                    <option value="a-z">Nombre - de A a la Z</option>
                    <option value="z-a">Nombre - de la Z a la A</option>
                </select>
            </form>
        </aside>
    )
}

export default Filters;