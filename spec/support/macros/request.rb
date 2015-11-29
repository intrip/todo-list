module RequestMacros
  def parseResponse
    @json ||= JSON(response.body)
  end
end