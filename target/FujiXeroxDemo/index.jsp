<!DOCTYPE html>
<html>
	<head>
	    <script src="lib/metawidget/core/metawidget-core.min.js" type="text/javascript"></script>
		<script type="text/javascript">
			var person = {
				name: "Homer Simpson",
				age: 40,
				retired: false
			};
		</script>
	</head>
<body>
    <div id="metawidget"></div>
		<script type="text/javascript">
			var mw = new metawidget.Metawidget( document.getElementById( 'metawidget' ));
			mw.toInspect = person;
			mw.buildWidgets();
		</script>
</body>
</html>
