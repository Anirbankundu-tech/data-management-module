// asyncSelect and formSubmitSanitization

import { masterData } from "./functions/asyncSelect.functions";
import { SanChemDeptMap, SanChemDeptReadMap } from "./functions/sanity.functions";

export const FunctionsRegistry = {
  SanChemDeptMap: SanChemDeptMap,

  SanChemDeptReadMap: SanChemDeptReadMap,
    
  masterData: masterData
    
};

