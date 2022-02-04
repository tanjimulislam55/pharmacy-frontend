import classes from './MedicineForm.module.css'

export default function MedicineForm({
    brandName,
    setBrandName,
    genericName,
    setGenericName,
    dosageForm,
    setDosageForm,
    stength,
    setStrength,
    unitPrice,
    setUnitPrice,
    manufacturers,
    setManufacturerId,
    setIsOpenForm,
    handleSubmit,
}) {
    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <h2>Add New Medicine</h2>
                <div className={classes.close} onClick={() => setIsOpenForm(false)}>
                    &times;
                </div>

                <form onSubmit={handleSubmit} classNameName={classes.item}>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setBrandName(e.target.value)}
                            value={brandName}
                            type="text"
                            name="brandName"
                            required
                        />
                        <label htmlFor="medicines">Brand Name</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setGenericName(e.target.value)}
                            value={genericName}
                            type="text"
                            name="genericName"
                            required
                        />
                        <label htmlFor="medicines">Generic Name</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setDosageForm(e.target.value)}
                            value={dosageForm}
                            type="text"
                            name="dosageForm"
                            required
                        />
                        <label htmlFor="medicines">Dosage Form</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setStrength(e.target.value)}
                            value={stength}
                            type="text"
                            name="strength"
                            required
                        />
                        <label htmlFor="medicines">Strength</label>
                    </div>
                    <div className={classes.inputbox}>
                        <input
                            onChange={(e) => setUnitPrice(parseFloat(e.target.value))}
                            value={unitPrice}
                            type="text"
                            name="unitPrice"
                            required
                        />
                        <label htmlFor="medicines">Unit Price</label>
                    </div>

                    <div className={classes.selectBox}>
                        <select
                            className={classes.option}
                            onChange={(e) => setManufacturerId(parseInt(e.target.value))}
                            id="vendors">
                            <option value="">Select Vendor</option>
                            {manufacturers.map((manufacturer, i) => (
                                <option key={i} value={manufacturer.id}>
                                    {manufacturer.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button type="submit" className={classes.button}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}
