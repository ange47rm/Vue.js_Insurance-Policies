class Policy {

    constructor(customerName, customerAddress, premium, policyType, insurerName) {
        this.customerName = customerName;
        this.customerAddress = customerAddress;
        this.premium = premium;
        this.policyType = policyType;
        this.insurerName = insurerName;       
    }
    
    customerName;
    customerAddress;
    premium;
    policyType;
    insurerName
}

export default Policy;