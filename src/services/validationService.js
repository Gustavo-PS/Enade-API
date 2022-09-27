class ValidationService{
    validateCreate(obj, db){
        if(obj.name == null || obj.name == "")
            return false;  
        if(db.find(x => x.name == obj.name))
            return false;
        
        return true;
    }

    validateUpdate(code,obj,db){
        if(db.find(x => x.id == obj.id)){
            if(code != obj.id)
                return false;
        }
        return true;
    }

    
    recursivo(numeroInferior,numeroMaximo,result) {
        result = result * (numeroInferior + (1 / numeroInferior));
        if (numeroInferior != numeroMaximo) {
            numeroInferior += 1;
            result = this.recursivo(numeroInferior,numeroMaximo, result);
        }
        
        return result;
    }
}

module.exports = new ValidationService();
