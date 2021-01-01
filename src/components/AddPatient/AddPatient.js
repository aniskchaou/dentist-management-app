import React from 'react';
import PropTypes from 'prop-types';
import './AddPatient.css';

const AddPatient = () => (
    <div className="AddPatient">
        <form action="https://doctorssnew.bdtask.com/admin/Patient_controller/save_patient" class="form-horizontal" role="form" enctype="multipart/form-data" method="post" accept-charset="utf-8">

            <div class="form-body">
                <div class="form-group">
                    <label class="col-md-3 control-label"><span class="text-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Nom complet</font></font></label>
                    <div class="col-md-6">
                        <input type="text" name="name" class="form-control" value="" required="" placeholder="Nom complet" />
                        <span class="text-danger"> </span>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label"><span class="text-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Id du patient</font></font></label>
                    <div class="col-md-6">
                        <input type="text" onkeyup="if (!window.__cfRLUnblockHandlers) return false; load_patient_id()" id="patient_id" autocomplete="off" name="patient_id" class="form-control" required="" value="" placeholder="ID du patient" />
                        <span class="text-danger"> </span>
                        <span class="p_id"></span>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label"><span class="text-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Adresse e-mail</font></font></label>
                    <div class="col-md-6">
                        <input type="text" name="email" value="" class="form-control" required="" placeholder="Adresse e-mail" />
                        <span class="text-danger"></span>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label"><span class="text-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Date de naissance</font></font></label>
                    <div class="col-md-4 ">
                        <input type="text" name="birth_date" value="" class="form-control datepicker1 birth_date hasDatepicker" placeholder="aaaa-mm-jj" id="dp1608289894893" />
                    </div>
                    <div class="col-md-2 ">
                        <input type="text" name="old" id="old" class="form-control" placeholder="Âge" />
                    </div>
                </div>


                <div class="form-group">
                    <label class="col-md-3 control-label"> <span class="text-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">*</font></font></span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Numéro de téléphone</font></font></label>
                    <div class="col-md-6">
                        <input type="number" name="phone" value="" class="form-control" required="" placeholder="Numéro de téléphone" />
                        <span class="text-danger"></span>
                    </div>
                </div>


                <div class="form-group">
                    <label class="col-md-3 control-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Le sexe</font></font></label>
                    <div class="col-md-6">
                        <input type="radio" id="checkbox2_5" name="gender" required="" value="Male" />
                        <label for="checkbox2_5"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Masculin</font></font></label>
                        <input type="radio" id="checkbox2_10" name="gender" required="" value="Female" />
                        <label for="checkbox2_10"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Femme</font></font></label>

                        <input type="radio" id="checkbox2_0" name="gender" required="" value="other" />
                        <label for="checkbox2_0"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;"> Autres</font></font></label>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Groupe sanguin </font></font></label>
                    <div class="col-md-6">
                        <select class="form-control" name="blood_group">
                            <option value=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">--Groupe sanguin--</font></font></option>
                            <option value="A+"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">A +</font></font></option>
                            <option value="A-"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UNE-</font></font></option>
                            <option value="B+"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">B +</font></font></option>
                            <option value="B-"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">B-</font></font></option>
                            <option value="O+"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">O +</font></font></option>
                            <option value="O-"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">O-</font></font></option>
                            <option value="AB+"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">AB +</font></font></option>
                            <option value="AB-"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">UN B-</font></font></option>
                            <option value="Unknown"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Inconnue</font></font></option>
                        </select>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Adresse</font></font></label>
                    <div class="col-md-6">
                        <textarea name="address" value="Address" class="form-control"></textarea>
                    </div>
                </div>

                <div class="form-group">
                    <label class="col-md-3 control-label"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Image</font></font></label>
                    <div class="col-md-6">
                        <input type="file" name="picture" />
                    </div>
                </div>
            </div>

            <div class="form-group row">
                <div class="col-sm-offset-3 col-sm-6">
                    <button type="reset" class="btn btn-danger"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Réinitialiser</font></font></button>
                    <button type="button" onclick="if (!window.__cfRLUnblockHandlers) return false; demoModeOne()" class="btn btn-success"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Soumettre</font></font></button>
                </div>
            </div>
        </form>
    </div>
);

AddPatient.propTypes = {};

AddPatient.defaultProps = {};

export default AddPatient;