<!-- redirect.blade.php -->
<script>
    // Perform the redirect
    window.location.href = '{{ $redirect_url }}';

    // Pass JSON data along with the redirection
    var jsonData = {!! $json_data !!};
    console.log(jsonData); // Access and use the JSON data as needed
</script>
