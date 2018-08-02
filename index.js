const app = require('./config/express');
mongoose = require('./config/mongoose');

port = process.env.PORT || 3000;

app.use(require("./adverse-reactions./adverse-reactions..route"));
app.use(require("./advice/advice.route"));
app.use(require("./brand-name/brand-name.route"));
app.use(require("./color/color.route"));
app.use(require("./contraindications/contraindications.route"));
app.use(require("./dosage/dosage.route"));
app.use(require("./factory/factory.route"));
app.use(require("./form/form.route"));
app.use(require("./generic-name/generic-name.route"));
app.use(require("./imprint/imprint.route"));
app.use(require("./indications/indications.route"));
app.use(require("./interactions/interactions.route"));
app.use(require("./mims/mims.route"));
app.use(require("./presentation-pack/presentation-pack.route"));
app.use(require("./presentation/presentation.route"));
app.use(require("./shape/shape.route"));
app.use(require("./thai-fda/thai-fda.route"));
app.use(require("./us-fda/us-fda.route"));
app.use(require("./warning/warning.route"));

app.listen( port );