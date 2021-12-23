export default function MedicineForm({ setIsOpenForm }) {
    return (
        <form className={classes.item} onSubmit={handleSubmit}>
            <h2>Add New Medicine</h2>
            <input placeholder="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="types">Select type</label>
            <select onChange={(e) => setTypeId(e.target.value)} id="types">
                <option value="">select</option>
                {types.map((type, i) => (
                    <option key={i} value={type.id}>
                        {type.name}
                    </option>
                ))}
            </select>
            <label htmlFor="categories">Select category</label>
            <select onChange={(e) => setCategorieId(e.target.value)} id="categories">
                <option value="">select</option>
                {categories.map((category, i) => (
                    <option key={i} value={category.id}>
                        {category.name}
                    </option>
                ))}
            </select>
            <label htmlFor="units">Select unit</label>
            <select onChange={(e) => setUnitId(e.target.value)} id="units">
                <option value="">select</option>
                {units.map((unit, i) => (
                    <option key={i} value={unit.id}>
                        {unit.name}
                    </option>
                ))}
            </select>
            <label htmlFor="vendors">Select vendor</label>
            <select onChange={(e) => setVendorId(e.target.value)} id="vendors">
                <option value="">select</option>
                {vendors.map((vendor, i) => (
                    <option key={i} value={vendor.id}>
                        {vendor.name}
                    </option>
                ))}
            </select>
            <button type="submit">Submit</button>
        </form>
    )
}
